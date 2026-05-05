import type { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <article className="flex flex-col relative bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <div className="h-[200px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 font-semibold tracking-wide">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex flex-col flex-1 p-6">
        <header className="flex justify-between items-start mb-3">
          <h3 className="m-0 text-xl font-bold text-slate-900 leading-snug">{property.title}</h3>
          <span className="text-lg font-extrabold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg whitespace-nowrap ml-4">
            ${property.pricePerNight}<small className="text-sm font-medium">/nt</small>
          </span>
        </header>
        
        <div className="text-sm text-slate-500 flex items-center gap-1 mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {property.city}
        </div>
        
        <p className="text-[0.95rem] text-slate-600 leading-relaxed mb-6 flex-1">
          {property.description}
        </p>
        
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0" aria-label="Amenities">
          {property.amenities.map((amenity, index) => (
            <li key={`${property.id}-amenity-${index}`} className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              {amenity.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const PropertyCardSkeleton = () => {
  return (
    <article className="flex flex-col relative bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden pointer-events-none">
      <div className="h-[200px] bg-slate-200 animate-pulse"></div>
      <div className="flex flex-col flex-1 p-6">
        <div className="h-6 bg-slate-200 rounded mb-3 w-3/4 animate-pulse"></div>
        <div className="h-4 bg-slate-200 rounded mb-6 w-2/5 animate-pulse"></div>
        <div className="h-16 bg-slate-200 rounded mb-6 w-full animate-pulse"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-slate-200 rounded-full w-16 animate-pulse"></div>
          <div className="h-6 bg-slate-200 rounded-full w-20 animate-pulse"></div>
        </div>
      </div>
    </article>
  );
};
