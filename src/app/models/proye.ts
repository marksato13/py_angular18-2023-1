export class Proyecti {
    // Atributos
    id: number = 0;
    nombreproyecto: string = "";
    descripcion: string = "";
    fecha_inicio: string = "";
    fecha_fin: string = "";
    numero_bene: string = "";
    localidad: string = "";
    objetivo: string = "";
    documento: string = "";
    estado: string = "";
    // Atributos foráneos
    convenio: number;
    tipo_Proyecto: number;
    semestre: number;
    escuelaProfecional: number;
    // Constructor
    constructor() {
        // Atributos
        this.nombreproyecto = "";
        this.descripcion = "";
        this.fecha_inicio = "";
        this.fecha_fin = "";
        this.numero_bene = "";
        this.localidad = "";
        this.objetivo = "";
        this.documento = "";
        this.estado = "";
        // Atributos foráneos
        this.convenio;
        this.tipo_Proyecto;
        this.semestre;
        this.escuelaProfecional;
        // Constructor    }
    }
}
