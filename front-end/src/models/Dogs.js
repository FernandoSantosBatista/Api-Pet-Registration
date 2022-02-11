export default class Dogs {
    constructor(obj) {
        obj = obj || {};
        this.id = obj.id;
        this.name = obj.name;
        this.species = obj.species;
        this.sex = obj.sex;
        this.age = obj.age
        this.size = obj.size
        this.logo = obj.logo
    }

    modelValidForRegistration(){
        return !!this.name;
    }

    modeloValidoParaAtualizar(){
        return !! (this.id && this.name)
    }
}