export function MapPreview() {
  return (
    <div className="map-preview media-reveal" aria-label="Map preview for Space Restocafe in Aqaba">
      <div className="map-preview__header">
        <div className="map-preview__pin">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
          </svg>
        </div>
        <span className="map-preview__label">Space Restocafe · Aqaba</span>
      </div>
      <iframe
        className="map-preview__iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.125!2d34.9963391!3d29.5418475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071002adf6add%3A0x8fbba75bd6d823d6!2sSpace%20Restocafe!5e0!3m2!1sar!2sjo!4v1714600000000!5m2!1sar!2sjo"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Space Restocafe location on Google Maps"
      />
    </div>
  );
}
