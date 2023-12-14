import React from "react";

const MyCvIcon = ({fill, margin}: {fill: string, margin: string}) => {
  return (
    <svg
    className={margin}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="24"
      height="24"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "auto",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }}
      viewBox="0 0 6.827 6.827"
    >
      <rect
        width="6.827"
        height="6.827"
        rx=".853"
        ry=".853"
        style={{ fill: `${fill}` }}
      />
      <path
        d="M1.573.853h2.502v1.072c0 .117.096.213.214.213H5.36v3.729a.107.107 0 0 1-.107.106h-3.68a.107.107 0 0 1-.106-.106V.96c0-.059.047-.107.106-.107zm.455 3.28h2.77v.16h-2.77v-.16zm0-.55h2.77v.16h-2.77v-.16zm0 1.098h2.77v.16h-2.77v-.16zm.588-1.951a.326.326 0 0 1-.32-.305.578.578 0 0 1-.002-.08c0-.122.038-.2.1-.25a.355.355 0 0 1 .221-.07l.007.001c.08.002.157.02.216.068.062.05.1.13.1.25a2.463 2.463 0 0 1-.003.08.335.335 0 0 1-.096.217.335.335 0 0 1-.22.089h-.003zm-.333-.148a.482.482 0 0 0-.169.163.568.568 0 0 0-.086.303v.009c0 .037.014.071.035.096a.124.124 0 0 0 .094.045h.918c.037 0 .07-.017.094-.045a.148.148 0 0 0 .035-.096v-.009a.568.568 0 0 0-.085-.3.483.483 0 0 0-.168-.165.354.354 0 0 1-.072.1.377.377 0 0 1-.596-.101zm2.006-.55a.107.107 0 0 1-.107-.107V.96a.107.107 0 0 1 .183-.076l.964.964a.107.107 0 0 1-.076.182H4.29zm-.877 1.04h1.374v.16H3.412v-.16zm.495-.38.144.046a.322.322 0 0 1-.11.179.313.313 0 0 1-.195.058.316.316 0 0 1-.24-.1.382.382 0 0 1-.094-.273c0-.122.031-.217.094-.284a.324.324 0 0 1 .25-.101c.089 0 .162.026.218.08a.288.288 0 0 1 .075.134l-.147.035a.154.154 0 0 0-.054-.09.155.155 0 0 0-.1-.033.167.167 0 0 0-.133.059c-.034.039-.05.102-.05.19 0 .092.016.158.05.197.033.04.076.06.13.06.039 0 .073-.013.101-.038a.219.219 0 0 0 .061-.118zm.458.27-.262-.733h.16l.186.543.18-.543h.157l-.263.733h-.158z"
        style={{ fill: "#fffffe" }}
      />
    </svg>
  );
};

export default MyCvIcon;