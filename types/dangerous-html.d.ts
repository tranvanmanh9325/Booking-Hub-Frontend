declare module 'dangerous-html/react' {
  import { Component } from 'react';
  
  interface ScriptProps {
    html: string;
  }
  
  export default class Script extends Component<ScriptProps> {}
}
