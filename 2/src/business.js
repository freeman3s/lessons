class Business
{
    render({owner, director = 'Victor', cash, emp, eu, rus}) {
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
        console.log(`And we have a sponsors: ${sumSponsors.join(' ')}`);
        console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
    }
}

export default Business;