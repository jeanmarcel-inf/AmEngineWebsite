"use client"

import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react'

export default function Map()
{
    const mapRef = React.useRef<HTMLDivElement>(null);
    useEffect(() =>
    {
        const initMap = async () =>
        {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly"
            })

            const { Map } = await loader.importLibrary("maps")

            // init a marker
            const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary

            const position = {
                lat: -22.81554914312892,
                lng: -43.3108144343573
            }

            // map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: "MY_NEXTJS_MAPID"
            }

            //setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            const marker = new Marker({
                map: map,
                position: position
            })
        }

        initMap()
    }, [])
    return (

        <div className='padding-container md:h-auto h-[500px] border-2 border-primary/50  md:w-full justify-center rounded-2xl' ref={mapRef} />
    )
}
