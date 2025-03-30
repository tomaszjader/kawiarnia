import React from 'react';
import { Coffee, Instagram, MapPin, Clock, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Hero Section */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">MOKO KAFE</h1>
          <p className="text-xl italic">Gdzie każda filiżanka opowiada historię</p>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Witaj w Moko Kafe</h2>
            <p className="text-gray-600 mb-6">
              Doświadcz idealnego połączenia rzemieślniczej kawy i przytulnej atmosfery w Moko Kafe. 
              Nasz starannie wyselekcjonowany wybór ziaren kawy i wykwalifikowani bariści gwarantują, 
              że każda filiżanka jest przygotowana do perfekcji.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#8b4513]" />
                <span>Odwiedź nas w naszej lokalizacji</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#8b4513]" />
                <span>Otwarte codziennie 7:00 - 22:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#8b4513]" />
                <span>Skontaktuj się z nami w sprawie rezerwacji</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80" 
              alt="Coffee" 
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80" 
              alt="Cafe Interior" 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Menu Preview */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nasze Specjalności</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Signature Espresso', 'Kawa Przelewowa', 'Rzemieślnicze Wypieki'].map((item, index) => (
              <div key={index} className="text-center">
                <Coffee className="w-12 h-12 mx-auto mb-4 text-[#8b4513]" />
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600">
                  Tworzone z pasją i doświadczeniem dla doskonałych doznań.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Grid Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Instagram className="w-8 h-8 text-[#8b4513]" />
            <h2 className="text-4xl font-bold text-center">Najnowsze z @mokokafe</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80" 
              alt="Coffee Art" 
              className="aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80" 
              alt="Coffee Shop" 
              className="aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80" 
              alt="Coffee Beans" 
              className="aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80" 
              alt="Coffee Experience" 
              className="aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80" 
              alt="Coffee Break" 
              className="aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80" 
              alt="Coffee Shop Interior" 
              className="aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80" 
              alt="Coffee Preparation" 
              className="aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?auto=format&fit=crop&q=80" 
              alt="Coffee Service" 
              className="aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2c1810] text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">MOKO KAFE</h3>
              <p className="mt-2">Śledź nas w mediach społecznościowych</p>
            </div>
            <a 
              href="https://www.instagram.com/mokokafe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Instagram />
              @mokokafe
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;