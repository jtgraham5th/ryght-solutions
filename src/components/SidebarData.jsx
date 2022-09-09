import React from 'react';
import {
HouseFill, PersonCircle, PeopleFill, Gear, ChatLeftText, QuestionCircle  } from "react-bootstrap-icons";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HouseFill />,
    cName: 'nav-text'
  },
  {
    title: 'Clients',
    path: '/client',
    icon: <PersonCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Gear />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <PeopleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <ChatLeftText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <QuestionCircle />,
    cName: 'nav-text'
  }
];