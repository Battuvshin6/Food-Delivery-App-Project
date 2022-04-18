import React from "react";
import { Stack } from "react-bootstrap";

export default function MainInfoSect() {
  return (
    <>
      <div className="info-container">
        <div className="infoholder">
          <Stack direction="horizontal" gap={3}>
            <img className="logo" src="/images/info-logo1.png" alt="logo1" />
            <div>
              <h4 className="">Шуурхай хүргэлт</h4>
              <p className="">30 минутанд таны гарт.</p>
            </div>
          </Stack>
        </div>
        <div className="infoholder">
          <Stack direction="horizontal" gap={3}>
            <img className="logo" src="/images/info-logo2.png" alt="logo1" />
            <div>
              <h4 className="">Эрүүл, баталгаат орц</h4>
              <p className="">Хамгийн чанартайг танд.</p>
            </div>
          </Stack>
        </div>
        <div className="infoholder">
          <Stack direction="horizontal" gap={3}>
            <img className="logo" src="/images/info-logo3.png" alt="logo1" />
            <div>
              <h4 className="">Өргөн сонголт</h4>
              <p className="">Хамгийн онцгойг танд.</p>
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
}
