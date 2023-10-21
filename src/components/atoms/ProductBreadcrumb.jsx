import React from "react";

export default function ProductBreadcrumb(props) {
  const {breadCrumbItem} = props;

  return (
    <span className="current-page-title" id="breadcrumb-product-category">
      <a
        href={"/" + breadCrumbItem.id}
        className="link-to-category"
      >
        {breadCrumbItem.name}
      </a>
    </span>
  );
}
