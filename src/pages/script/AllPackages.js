import beachPhoto from '../../assets/photos/beach photos.webp'
import shriMurudeshwaraBeach from '../../assets/photos/shri-murdeshwara-beach.webp'
import honnawara from '../../assets/photos/honnawara.webp'
import underwater from '../../assets/photos/underwater-tunnel.webp'



export const AllPackages = [
                {
                    id: 1,
                    title: 'Dandeli–Gokarna Adventure Trip',
                    description: 'A 3-day adventure trip covering Dandeli, Gokarna, Honnavara, and Murdeshwar with thrilling activities, scenic views, and group experiences.',
                    food:"Meals are included as part of the package.",
                    price: 6499,
                    duration: '3 Days',
                    groupSize: '49 People',
                    location: 'Dandeli, Gokarna, Honnavara, Murdeshwar',
                    image: honnawara,
                    category: 'adventure',
                    extra: "Scuba diving, Fire camp, Food",
                },
                {
                
                    id: 2,
                    title: 'Goa & Murdeshwar Beach Escape',
                    description: 'A refreshing 2-day beach getaway covering the vibrant beaches of Goa and the serene coastal beauty of Murdeshwar. Ideal for small and large groups.',
                    food:"Meals are included as part of the package.",
                    price: 5299,
                    duration: '2 Days',
                    groupSize: '16–49 People',
                    location: 'Goa, Murdeshwar',
                    image: shriMurudeshwaraBeach,
                    category: 'beach',
                    extra: "Scuba diving, Fire camp, Food",

                },
                {
                    id: 3,
                    title: 'Mysore Sightseeing & Leisure Trip',
                    description: 'A relaxing 2-day Mysore trip covering top attractions like Mysore Zoo, GRS Fantasy Park, and Chamundeshwari Hill. Ideal for group travel.',
                    food:"Meals are included as part of the package.",
                    price: 4999,
                    duration: '2 Days',
                    groupSize: '16–49 People',
                    location: 'Mysore (Zoo, GRS Fantasy Park, Chamundeshwari Hill, Rangarajan Aqua Park)',
                    image: underwater,
                    category: 'family',
                    extra: "Fire camp",
                },
            ];


const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export const filterOptions = [
  { value: 'all', label: 'All Packages' },
  ...[...new Set(AllPackages.map(pack => pack.category))]
    .map(cat => ({
      value: cat,
      label: capitalize(cat)
    }))
];
