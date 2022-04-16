import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function result() {
    const router = useRouter();
    useEffect(() => {
        console.log(router.query);
      }, [router.query]);
    return (
        null
    )
}