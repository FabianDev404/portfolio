import React from 'react';
import PropTypes from 'prop-types';

const CertificateCard = ({ imgSrc, title, from, src, classes = '' }) => {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 text-center rounded-2xl ring-1 shadow-lg transition-all duration-300 cursor-pointer bg-zinc-50/10 hover:bg-zinc-50/20 ring-zinc-50/10 group ${classes}`}
      tabIndex={0}
      aria-label={`${title} - ${from}`}
    >
      <figure className="mx-auto w-full h-60 md:h-64 bg-white rounded-xl overflow-hidden flex justify-center items-center shadow transition-transform group-hover:scale-105 mb-4">
        <img src={imgSrc} alt={title} className="object-contain" loading="lazy" />
      </figure>
      <h3 className="mb-1 text-lg font-semibold transition-colors text-zinc-200 group-hover:text-sky-400">{title}</h3>
      <p className="text-sm text-zinc-400">{from}</p>
    </a>
  );
};

CertificateCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default CertificateCard;
