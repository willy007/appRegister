export interface Usuario {
    uid: string;
    email: string;
    displayName: string;
    emailVerified: boolean;
}


export interface User {
    userUid:     string;
    nombre:      string;
    rol:         string;
    asignaturas: Asignatura[];
}

export interface Asignatura {
    nombre: string;
    ref:    string;
}




