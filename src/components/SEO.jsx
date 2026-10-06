import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, canonicalUrl }) {
  const fullTitle = title
    ? `${title}`
    : "Leanqualities Solutions - Premier IT Company in Pune";
  const defaultDesc =
    "Leanquality Solutions India Pvt. Ltd (LQSIPL) is a premier IT consulting and software engineering firm in Pune offering web development, cloud, AI/ML, and digital marketing services.";
  const metaDescription = description || defaultDesc;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
