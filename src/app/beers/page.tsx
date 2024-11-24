import BeerCard from './components/BeerCard';

const beers = [
  {
    id: 1,
    name: "Santa's Brew",
    description: 'Rich and spicy ale.',
    rating: 0,
  },
  {
    id: 2,
    name: 'Frosty Lager',
    description: 'Crisp and refreshing.',
    rating: 0,
  },
  { id: 3, name: "Elf's IPA", description: 'Hoppy and aromatic.', rating: 0 },
];

export default function BeersPage() {
  return (
    <main className='p-4'>
      <h1 className='text-xl font-bold text-center mb-4'>
        Rate the Christmas Beers!
      </h1>
      <div className='grid grid-cols-1 gap-4'>
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </main>
  );
}
