import { services } from './content';

const Services = () => {
    return (
        <main className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-orange-400 mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      );
}

export default Services
