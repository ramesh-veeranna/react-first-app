import React, {useState, useEffect} from 'react'
import User from './User'

/* const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  */
  
export default function About() {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [photos, setPhotos] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/pomeranian/images')
        .then(response => response.json())
        .then((result) => {
            setIsLoaded(true)
            setPhotos(result)
        },
        (error) => {
            setIsLoaded(true)
            setError(error)
        })
    }, [])

    if(error) {

    } else if(!setIsLoaded) {

    } else {
        return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2">
                    { photos && photos.message.map((photo, i) => (
                        <img className="w-50 h-30" src={photo} key={i} alt="" />
                    ))}
                </ul>
            </div>
        </div>
        )
        }
    }
  