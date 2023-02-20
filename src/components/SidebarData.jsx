import React from 'react';
import {
HouseFill, PersonCircle, PeopleFill, Gear, ChatLeftText, QuestionCircle  } from "react-bootstrap-icons";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <HouseFill />,
    cName: 'nav-text',
    disabled: false
  },
  {
    title: 'Clients',
    path: '/patient/blank/',
    icon: <PersonCircle />,
    cName: 'nav-text',
    disabled: false,
  },
  {
    title: 'Settings',
    path: '/ryght-solutions/settings/',
    icon: <Gear />,
    cName: 'nav-text',
    disabled: false,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <PeopleFill />,
    cName: 'nav-text',
    disabled: true,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <ChatLeftText />,
    cName: 'nav-text',
    disabled: true,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <QuestionCircle />,
    cName: 'nav-text',
    disabled: true,
  }
];