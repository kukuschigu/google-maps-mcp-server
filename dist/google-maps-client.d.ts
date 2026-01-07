import { GeocodeResult, Location, PlaceResult, RouteResult } from './types.js';
export declare class GoogleMapsClient {
    private apiKey;
    private baseUrl;
    private cache;
    private rateLimiter;
    private rateLimitEnabled;
    private rateLimitWindowMs;
    private rateLimitMaxRequests;
    constructor(apiKey: string);
    private makeRequest;
    private checkRateLimit;
    private sleep;
    private createMCPError;
    geocodeSearch(query: string, region?: string, language?: string): Promise<GeocodeResult[]>;
    geocodeReverse(lat: number, lng: number, language?: string): Promise<GeocodeResult[]>;
    placesSearchText(query: string, options?: {
        includedTypes?: string[];
        excludedTypes?: string[];
        openNow?: boolean;
        priceLevels?: number[];
        minRating?: number;
        locationBias?: any;
        rankPreference?: string;
        language?: string;
        region?: string;
        maxResults?: number;
    }): Promise<PlaceResult[]>;
    placesNearby(location: Location, radiusMeters: number, options?: {
        includedTypes?: string[];
        maxResults?: number;
        language?: string;
        region?: string;
    }): Promise<PlaceResult[]>;
    placesAutocomplete(input: string, options?: {
        sessionToken?: string;
        locationBias?: any;
        includedTypes?: string[];
        language?: string;
        region?: string;
    }): Promise<any[]>;
    placesDetails(placeId: string, options?: {
        fields?: string[];
        language?: string;
        region?: string;
        sessionToken?: string;
    }): Promise<PlaceResult>;
    placesPhotos(photoReference: string, maxWidth?: number, maxHeight?: number): Promise<string>;
    routesCompute(origin: Location | {
        address: string;
    }, destination: Location | {
        address: string;
    }, options?: {
        waypoints?: Array<{
            location: Location | {
                address: string;
            };
            via?: boolean;
        }>;
        travelMode?: string;
        routingPreference?: string;
        computeAlternativeRoutes?: boolean;
        avoidTolls?: boolean;
        avoidHighways?: boolean;
        avoidFerries?: boolean;
        language?: string;
        region?: string;
        units?: string;
    }): Promise<{
        routes: RouteResult[];
    }>;
    routesMatrix(origins: Array<Location | {
        address: string;
    }>, destinations: Array<Location | {
        address: string;
    }>, options?: {
        travelMode?: string;
        routingPreference?: string;
        language?: string;
        region?: string;
        units?: string;
    }): Promise<any>;
    elevationGet(locations?: Location[], path?: string, samples?: number): Promise<Array<{
        elevation: number;
        location: Location;
        resolution: number;
    }>>;
    timezoneGet(lat: number, lng: number, timestamp?: number, language?: string): Promise<any>;
    geolocationEstimate(options?: {
        wifiAccessPoints?: Array<{
            macAddress: string;
            signalStrength?: number;
            age?: number;
            channel?: number;
            signalToNoise?: number;
        }>;
        cellTowers?: Array<{
            cellId: number;
            locationAreaCode: number;
            mobileCountryCode: number;
            mobileNetworkCode: number;
            age?: number;
            signalStrength?: number;
            timingAdvance?: number;
        }>;
        considerIp?: boolean;
    }): Promise<{
        location: Location & {
            accuracy: number;
        };
    }>;
    roadsNearest(points: Location[], travelMode?: string): Promise<any>;
    private formatLocationForRoutes;
    /**
     * Transform user-friendly field names to Google Places API (New) format
     * Maps snake_case/friendly names to camelCase
     * @param fields - Array of user-friendly field names
     * @param addPrefix - Whether to add "places." prefix (true for POST search, false for GET details)
     */
    private transformPlacesFields;
    private formatPlaceResults;
    private formatPlaceResult;
    private formatRouteResult;
    private formatDirectionsRoute;
}
//# sourceMappingURL=google-maps-client.d.ts.map