type StatCardProps = {
    title: string;
    value: number;
    subtext: string;
}

export function StatCard({ title, value, subtext }: StatCardProps) {
    return (
            <div className="bg-white p-4 rounded shadow-md w-1/4 mr-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-gray-600">{subtext}</p>
            </div>
    )
}