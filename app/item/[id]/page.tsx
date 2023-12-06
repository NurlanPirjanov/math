async function getTerm(id: number) {
    const res = await fetch(`https://dawran.uz/api/term/${id}`, {
        method: 'GET'
    })
    if (!res.ok) throw new Error('Error')
    return res.json()
}

export default async function DetailCategory({params}: { params: { id: number }; }) {
    const data = await getTerm(params.id);
    return (
        <>
            <p>name: {data.data?.term_qq}</p>
            <p>category: {data.data?.category.category_name}</p>
            <p>category: {data.data?.created_at}</p>
            <hr/>
            {data.data.comments?.map((commment: any) => {
                return (
                    <p>
                        Comment: {commment.content}
                    </p>
                )
            } )}
        </>
    );
}