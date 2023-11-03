import React from "react";
import UserProfile from "./UserProfile";

export default function App() {
  return (
    <div className="App">
      <UserProfile
        name="Harsha raj"
        avatar_url="https://cdn.vox-cdn.com/thumbor/Dtl0EGQ3bYjAVBNuqxp2ZvAXVng=/0x0:1920x1200/920x613/filters:focal(810x375:1116x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg"
        title="Software Engineer"
        skillsets={[
          "⚛️ React.js",
          "⬢ Node.js",
          " 😊 JavaScript",
          "👻 SQL",
          "💀 Python",
          "👌 MongoDB",
          "⚛️ ReactHooks",
          "🙇‍♂️ReactNative"
        ]}
      />
    </div>
  );
}
