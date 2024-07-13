export default function NewsCard() {
    return (
        <div className="bg-card dark:bg-card-foreground text-card-foreground dark:text-card p-4 rounded-lg shadow-md">
            <img src="https://placehold.co/400x200" alt="News Image" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold mb-2">Breaking News Title</h3>
            <p className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="text-primary hover:underline">Read more</a>
        </div>
    )
}