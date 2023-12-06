import Link from "next/link";

async function getCategoryList() {
    const res = await fetch(`https://dawran.uz/api/categories`, {
        method: 'GET'
    })
    if (!res.ok) throw new Error('Error')
    return res.json()
}

export default async function DetailCategory() {
    const data = await getCategoryList();
    return (
        <>
            {data.map((c: any) => {
                return (
                    <p>
                        <Link key={c.id} href={`category/${c.id}`}>{c.category_name}</Link>
                    </p>
                )
            })}
        </>
    );
}