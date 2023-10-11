class Hero{
    //public
    title = "Ironman";
    fname = "Tony";
    lname = "stark";
    //private
    #mission = "my secret mission";
    //static
    static version = 101
    
    //method
    fullname(){
        return this.fname+" "+this.lname;
    }
    get mission(){
        return this.#mission;
        
    }
    set mission(nmission){
        this.#mission = nmission;

    }
};


export {Hero};