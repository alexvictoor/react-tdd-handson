import * as React from "react";

interface HelloProps {
  dude: string;
}


export default ({dude} : HelloProps) => <div>Hello world {dude}!</div>