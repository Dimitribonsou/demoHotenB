import { useProperties } from '../hooks/useProperties';
import { PropertyCard, PropertyCardSkeleton } from './PropertyCard';

export const PropertyList = () => {
  const { data: properties, isLoading, isError, refetch } = useProperties();

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center py-16 px-6 bg-slate-100 rounded-2xl text-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Oops! Something went wrong.</h2>
          <p className="mb-6">We couldn't load the properties. Please try again later.</p>
          <button 
            onClick={() => refetch()} 
            className="px-6 py-2.5 bg-slate-900 text-white border-none rounded-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-slate-800"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 m-0 mb-2">Available Properties</h2>
        <p className="text-lg text-slate-600 m-0">Find your next perfect stay</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <PropertyCardSkeleton key={`skeleton-${i}`} />
          ))
        ) : properties?.length === 0 ? (
          <div className="col-span-full text-center py-16 px-6 bg-slate-100 rounded-2xl text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 mt-0 mb-4">No properties found</h2>
            <p>Check back later for new listings!</p>
          </div>
        ) : (
          properties?.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        )}
      </div>
    </section>
  );
};
