import {AddButton} from "@/components/addButton";

export default async function Page() {
    const data = await fetch("http://localhost:8080/api/projects", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!data.ok) {
        throw new Error('Network response was not ok');
    }
    const products = await data.json();

    return (
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className={'py-3 flex'}>
                <h1 className="text-2xl dark:text-white">Projects</h1>
                <AddButton />
            </div>
            <div className={'bg-gray-100 dark:bg-gray-700 w-full rounded p-3'}>
                <div className={'pt-3'}>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className={'border-b'}>
                                <th className="text-left">Name</th>
                                <th className="text-left">Description</th>
                                <th className={'text-left'}>Date</th>
                                <th className="text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product: any) => (
                                <tr key={product.id}>
                                    <td className="">{product.title}</td>
                                    <td className="">{product.description}</td>
                                    <td className="">{product.created_at}</td>
                                    <td className=" text-right">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}