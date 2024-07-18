export class Proyect {
    //atri
    id:number
    nombreproyecto: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string;
    numero_bene: string;
    localidad: string;
    objetivo: string;
    documento: any;
    estado: string;
    //foraneas
    convenio: any;
    tipo_Proyecto: any;
    semestre: any;
    escuelaProfecional: any;

    constructor() {
        //atri
        this.id = 0,
        this.nombreproyecto = "";
        this.descripcion = "";
        this.fecha_inicio = "";
        this.fecha_fin = "";
        this.numero_bene = "";
        this.localidad = "";
        this.objetivo = "";
        this.documento = "";
        this.estado = "";
        //foraneas
        this.convenio = 0;
        this.tipo_Proyecto = 0;
        this.semestre = 0;
        this.escuelaProfecional = 0;

    }
}
