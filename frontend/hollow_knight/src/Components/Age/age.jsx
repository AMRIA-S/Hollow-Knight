function Age() {
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear() - parseInt('1999')

    if (day <= parseInt('23') && month === parseInt('05')) {
        return <>{year}</>
    } else if (month > parseInt('05')) {
        return <>{year}</>
    }

    return <> {year - 1}</>
}

export default Age
