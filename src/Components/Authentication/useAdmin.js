import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        const email = user?.email;
       
        if (email) {
            fetch(`http://127.0.0.1:5000/api/admin/${email}`, {
                method: 'GET',
                
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.Admin)
                    setAdmin(data.Admin)
                    setAdminLoading(false);
                })
        }

    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;