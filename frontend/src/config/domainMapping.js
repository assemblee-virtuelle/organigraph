import React from "react";
import ForumIcon from "@material-ui/icons/Forum";
import { Avatar } from "@material-ui/core";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default {
  'forums.assemblee-virtuelle.org': {
    label: 'Forum',
    icon: <ForumIcon />,
    color: '#28ccfb',
    contrastText: 'white'
  },
  'chat.lescommuns.org': {
    label: 'Chat',
    icon: <Avatar src="/lescommuns.jpg" />,
    color: '#ffffff',
    contrastText: 'black'
  },
  'peertube.virtual-assembly.org': {
    label: 'Peertube',
    icon: <VideocamOutlinedIcon />,
    color: 'white',
    contrastText: '#f2690d'
  },
  'www.facebook.com': {
    label: 'Facebook',
    icon: <FacebookIcon />,
    color: '#4267B2',
    contrastText: 'white'
  },
  'www.linkedin.com': {
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
    color: '#0072b1',
    contrastText: 'white'
  },
  'grandjardin.jardiniersdunous.org': {
    label: 'Espace Grand Jardin',
    icon: <Avatar src="/jdn.png" />,
    color: '#E0E0E0',
    contrastText: 'black'
  },
};