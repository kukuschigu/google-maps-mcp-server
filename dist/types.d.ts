import { z } from 'zod';
export declare const LocationSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, z.core.$strip>;
export declare const AddressSchema: z.ZodObject<{
    formatted_address: z.ZodString;
    address_components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        long_name: z.ZodString;
        short_name: z.ZodString;
        types: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const GeocodeSearchSchema: z.ZodObject<{
    query: z.ZodString;
    region: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GeocodeReverseSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
    language: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const LocationBiasSchema: z.ZodOptional<z.ZodObject<{
    circle: z.ZodOptional<z.ZodObject<{
        center: z.ZodObject<{
            lat: z.ZodNumber;
            lng: z.ZodNumber;
        }, z.core.$strip>;
        radius_meters: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export declare const PlacesSearchTextSchema: z.ZodObject<{
    query: z.ZodString;
    included_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    excluded_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    open_now: z.ZodOptional<z.ZodBoolean>;
    price_levels: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    min_rating: z.ZodOptional<z.ZodNumber>;
    location_bias: z.ZodOptional<z.ZodObject<{
        circle: z.ZodOptional<z.ZodObject<{
            center: z.ZodObject<{
                lat: z.ZodNumber;
                lng: z.ZodNumber;
            }, z.core.$strip>;
            radius_meters: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    rank_preference: z.ZodOptional<z.ZodEnum<{
        RELEVANCE: "RELEVANCE";
        DISTANCE: "DISTANCE";
    }>>;
    language: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    max_results: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const PlacesNearbySchema: z.ZodObject<{
    location: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>;
    radius_meters: z.ZodNumber;
    included_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    max_results: z.ZodOptional<z.ZodNumber>;
    language: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const PlacesAutocompleteSchema: z.ZodObject<{
    input: z.ZodString;
    session_token: z.ZodOptional<z.ZodString>;
    location_bias: z.ZodOptional<z.ZodObject<{
        circle: z.ZodOptional<z.ZodObject<{
            center: z.ZodObject<{
                lat: z.ZodNumber;
                lng: z.ZodNumber;
            }, z.core.$strip>;
            radius_meters: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    included_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const PlacesDetailsSchema: z.ZodObject<{
    place_id: z.ZodString;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    session_token: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const PlacesPhotosSchema: z.ZodObject<{
    photo_reference: z.ZodString;
    max_width: z.ZodOptional<z.ZodNumber>;
    max_height: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const WaypointSchema: z.ZodObject<{
    location: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        address: z.ZodString;
    }, z.core.$strip>]>;
    via: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const RoutesComputeSchema: z.ZodObject<{
    origin: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        address: z.ZodString;
    }, z.core.$strip>]>;
    destination: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        address: z.ZodString;
    }, z.core.$strip>]>;
    waypoints: z.ZodOptional<z.ZodArray<z.ZodObject<{
        location: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lng: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            address: z.ZodString;
        }, z.core.$strip>]>;
        via: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    travel_mode: z.ZodOptional<z.ZodEnum<{
        DRIVE: "DRIVE";
        WALK: "WALK";
        BICYCLE: "BICYCLE";
        TRANSIT: "TRANSIT";
    }>>;
    routing_preference: z.ZodOptional<z.ZodEnum<{
        TRAFFIC_UNAWARE: "TRAFFIC_UNAWARE";
        TRAFFIC_AWARE: "TRAFFIC_AWARE";
        TRAFFIC_AWARE_OPTIMAL: "TRAFFIC_AWARE_OPTIMAL";
    }>>;
    compute_alternative_routes: z.ZodOptional<z.ZodBoolean>;
    avoid_tolls: z.ZodOptional<z.ZodBoolean>;
    avoid_highways: z.ZodOptional<z.ZodBoolean>;
    avoid_ferries: z.ZodOptional<z.ZodBoolean>;
    language: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    units: z.ZodOptional<z.ZodEnum<{
        METRIC: "METRIC";
        IMPERIAL: "IMPERIAL";
    }>>;
}, z.core.$strip>;
export declare const RoutesMatrixSchema: z.ZodObject<{
    origins: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        address: z.ZodString;
    }, z.core.$strip>]>>;
    destinations: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        address: z.ZodString;
    }, z.core.$strip>]>>;
    travel_mode: z.ZodOptional<z.ZodEnum<{
        DRIVE: "DRIVE";
        WALK: "WALK";
        BICYCLE: "BICYCLE";
        TRANSIT: "TRANSIT";
    }>>;
    routing_preference: z.ZodOptional<z.ZodEnum<{
        TRAFFIC_UNAWARE: "TRAFFIC_UNAWARE";
        TRAFFIC_AWARE: "TRAFFIC_AWARE";
        TRAFFIC_AWARE_OPTIMAL: "TRAFFIC_AWARE_OPTIMAL";
    }>>;
    language: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    units: z.ZodOptional<z.ZodEnum<{
        METRIC: "METRIC";
        IMPERIAL: "IMPERIAL";
    }>>;
}, z.core.$strip>;
export declare const ElevationGetSchema: z.ZodObject<{
    locations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>>>;
    path: z.ZodOptional<z.ZodString>;
    samples: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const TimezoneGetSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
    timestamp: z.ZodOptional<z.ZodNumber>;
    language: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GeolocationEstimateSchema: z.ZodObject<{
    wifi_access_points: z.ZodOptional<z.ZodArray<z.ZodObject<{
        mac_address: z.ZodString;
        signal_strength: z.ZodOptional<z.ZodNumber>;
        age: z.ZodOptional<z.ZodNumber>;
        channel: z.ZodOptional<z.ZodNumber>;
        signal_to_noise: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    cell_towers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        cell_id: z.ZodNumber;
        location_area_code: z.ZodNumber;
        mobile_country_code: z.ZodNumber;
        mobile_network_code: z.ZodNumber;
        age: z.ZodOptional<z.ZodNumber>;
        signal_strength: z.ZodOptional<z.ZodNumber>;
        timing_advance: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    consider_ip: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const RoadsNearestSchema: z.ZodObject<{
    points: z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>>;
    travel_mode: z.ZodOptional<z.ZodEnum<{
        DRIVING: "DRIVING";
        WALKING: "WALKING";
        BICYCLING: "BICYCLING";
    }>>;
}, z.core.$strip>;
export declare const NearbyFindSchema: z.ZodObject<{
    origin: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        address: z.ZodString;
    }, z.core.$strip>]>;
    what: z.ZodEnum<{
        custom: "custom";
        cities: "cities";
        towns: "towns";
        pois: "pois";
    }>;
    included_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    radius_meters: z.ZodOptional<z.ZodNumber>;
    max_results: z.ZodOptional<z.ZodNumber>;
    language: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const IpGeolocateSchema: z.ZodObject<{
    reverse_geocode: z.ZodOptional<z.ZodBoolean>;
    language: z.ZodOptional<z.ZodString>;
    ip_override: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Location = z.infer<typeof LocationSchema>;
export type Address = z.infer<typeof AddressSchema>;
export type GeocodeSearchInput = z.infer<typeof GeocodeSearchSchema>;
export type GeocodeReverseInput = z.infer<typeof GeocodeReverseSchema>;
export type PlacesSearchTextInput = z.infer<typeof PlacesSearchTextSchema>;
export type PlacesNearbyInput = z.infer<typeof PlacesNearbySchema>;
export type PlacesAutocompleteInput = z.infer<typeof PlacesAutocompleteSchema>;
export type PlacesDetailsInput = z.infer<typeof PlacesDetailsSchema>;
export type PlacesPhotosInput = z.infer<typeof PlacesPhotosSchema>;
export type RoutesComputeInput = z.infer<typeof RoutesComputeSchema>;
export type RoutesMatrixInput = z.infer<typeof RoutesMatrixSchema>;
export type ElevationGetInput = z.infer<typeof ElevationGetSchema>;
export type TimezoneGetInput = z.infer<typeof TimezoneGetSchema>;
export type GeolocationEstimateInput = z.infer<typeof GeolocationEstimateSchema>;
export type RoadsNearestInput = z.infer<typeof RoadsNearestSchema>;
export type NearbyFindInput = z.infer<typeof NearbyFindSchema>;
export type IpGeolocateInput = z.infer<typeof IpGeolocateSchema>;
export interface MCPError {
    code: string;
    message: string;
    context?: {
        endpoint?: string;
        status?: number;
        [key: string]: any;
    };
}
export interface GeocodeResult {
    formatted_address: string;
    location: Location;
    address_components?: Array<{
        long_name: string;
        short_name: string;
        types: string[];
    }>;
    place_id?: string;
    types?: string[];
}
export interface PlaceResult {
    id: string;
    name: string;
    formatted_address?: string;
    address_components?: Array<{
        longText: string;
        shortText: string;
        types: string[];
        languageCode?: string;
    }>;
    location?: Location;
    rating?: number;
    price_level?: number;
    types?: string[];
    opening_hours?: {
        open_now?: boolean;
        periods?: Array<{
            open: {
                day: number;
                time: string;
            };
            close?: {
                day: number;
                time: string;
            };
        }>;
    };
    photos?: Array<{
        photo_reference: string;
        height: number;
        width: number;
    }>;
    reviews?: Array<{
        author_name?: string;
        rating?: number;
        text?: string;
        time?: number;
    }>;
    editorial_summary?: {
        overview?: string;
    };
    website?: string;
    phone_number?: string;
    international_phone_number?: string;
    user_ratings_total?: number;
}
export interface RouteResult {
    distance_meters: number;
    duration_seconds: number;
    duration_in_traffic_seconds?: number;
    polyline: string;
    tolls?: {
        currency: string;
        estimated: number;
    };
    legs: Array<{
        start: Location;
        end: Location;
        steps: number;
        distance_meters: number;
        duration_seconds: number;
    }>;
}
//# sourceMappingURL=types.d.ts.map