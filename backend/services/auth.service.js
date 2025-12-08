const path = require("path");
const { AuthOIDCService } = require("@semapps/auth");
const { triple, namedNode, literal } = require("@rdfjs/data-model");
const CONFIG = require("../config/config");

module.exports = {
  mixins: [AuthOIDCService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    jwtPath: path.resolve(__dirname, "../jwt"),
    issuer: CONFIG.OIDC_ISSUER,
    clientId: CONFIG.OIDC_CLIENT_ID,
    clientSecret: CONFIG.OIDC_CLIENT_SECRET,
    selectSsoData: (authData) => {
      console.log("authData", authData);
      return {
        nick: authData.preferred_username,
        email: authData.email,
        name: authData.given_name,
        familyName: authData.family_name,
      };
    },
    webIdSelection: [],
    accountsDataset: CONFIG.SETTINGS_DATASET,
  },
  events: {
    async "auth.registered"(ctx) {
      const { webId, profileData } = ctx.params;

      await ctx.call("ldp.resource.patch", {
        resourceUri: webId,
        triplesToAdd: [
          triple(
            namedNode(webId),
            namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
            namedNode("http://virtual-assembly.org/ontologies/pair#Person")
          ),
          triple(
            namedNode(webId),
            namedNode("http://virtual-assembly.org/ontologies/pair#label"),
            literal(
              `${profileData.name || ""} ${(
                profileData.familyName || ""
              ).toUpperCase()}`
            )
          ),
          triple(
            namedNode(webId),
            namedNode("http://virtual-assembly.org/ontologies/pair#firstName"),
            literal(profileData.name || "")
          ),
          triple(
            namedNode(webId),
            namedNode("http://virtual-assembly.org/ontologies/pair#lastName"),
            literal(profileData.familyName || "")
          ),
        ],
        webId: "system",
      });
    },
    async "ldp.resource.deleted"(ctx) {
      const { resourceUri, oldData } = ctx.params;

      if (arrayOf(oldData.type).includes("Person")) {
        await ctx.call("auth.account.deleteByWebId", { webId: resourceUri });
      }
    },
  },
};
