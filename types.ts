import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Amenity {
  name: string;
  image: string;
}