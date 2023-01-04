import { GpsCoordinates } from "./GpsCoordinates";

export class Enclosure {
    _id?: string;
    name?: string;
    description?: string;
    areaInSquareMeter?: string;
    gpsCoordinates?: GpsCoordinates;
    zone?: Zone;


}


