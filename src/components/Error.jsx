import React, { useState, useEffect } from "react";

const Error = () => {
  const [code, setCode] = useState(400);
  const [codeMsg, setCodeMsg] = useState("Bad request");
  const params = new URL(window.location.href).searchParams;
  const status = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a Teapot",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    509: "Bandwidth Limit Exceeded",
    510: "Not Extended",
    511: "Network Authentication Required",
  };

  useEffect(() => {
    const paramCode = Number(params.get("code")) || 404;

    setCode(paramCode > 399 ? paramCode : 404);
    setCodeMsg(status[paramCode] || status[404]);
    document.title = status[paramCode] || status[404];
  }, []);

  return (
    <div
      style={{
        display: "grid",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        id="code"
        style={{
          fontSize: "300px",
          textShadow: "-4px -4px 0 #2943d1, 4px 4px 0 #f00",
        }}
      >
        {code}
      </h1>
      <p id="codeMsg">{codeMsg}</p>
      <br />
      <br />
      <a href=".." style={{ fontSize: "16px" }}>
        Back
      </a>
    </div>
  );
};

export default Error;
