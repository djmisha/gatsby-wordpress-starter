import React from "react"

const Location = ({ siteData }) => {
  // location = siteData.location
  // console.log(siteData.site.siteMetadata.title)
  return (
    <div className="location-info">
      <p className="location-name">{siteData.site.siteMetadata.title}</p>
      <p className="location-address">
        {siteData.site.siteMetadata.locationaddress}
      </p>
      <p className="location-city">{siteData.site.siteMetadata.locationcity}</p>
      <p className="location-phone">{siteData.site.siteMetadata.phone}</p>
      <p className="location-maplink">{siteData.site.siteMetadata.maplink}</p>
    </div>
  )
}

export default Location
