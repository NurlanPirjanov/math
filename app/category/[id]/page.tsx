import Link from "next/link";

async function getData(id: string) {
    const res = await fetch(`https://dawran.uz/api/category/${id}`, {
        method: 'GET'
    })
    if (!res.ok) throw new Error('Error')
    return res.json()
}

export default async function DetailCategory({params}: { params: { id: string }; }) {
    const data = await getData(params.id);
    console.log(data)
    const page = params.id;

    return (
        <>
            <p>Category ID: {page}</p>
            {data.data.map((c: any) => {
                return (
                    <p>
                        <Link key={c.id} href={`/item/${c.id}`}>{c.term_qq}</Link>
                    </p>
                )
            })}
        </>
    );
}