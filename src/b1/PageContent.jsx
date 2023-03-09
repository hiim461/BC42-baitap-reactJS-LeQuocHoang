import React from "react";
import PageFeatures from "./PageFeatures";

function PageContent() {
  return (
    <div>
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5">
            <PageFeatures/>
            <PageFeatures/>
            <PageFeatures/>
            <PageFeatures/>
            <PageFeatures/>
            <PageFeatures/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageContent;
