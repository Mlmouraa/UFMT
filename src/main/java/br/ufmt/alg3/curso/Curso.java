package br.ufmt.alg3.curso;

public class Curso {
    private String nome;
    private String periodo; //matutino, vespertino e noturno
    private float nota; //estrela 0-5 fracionada
    private String comentario;
    private String rga;
    private String semestre;// 2024/1


    public Curso(){
        
    }




    public void setNome(String nome){
        this.nome = nome;
    }
    public String getNome(){
        return nome;
    }

    public void setPeriodo(String periodo){
        this.periodo = periodo;
    }
    public String getPeriodo(){
        return periodo;
    }

    public void setNota(float nota){
        this.nota = nota;
    }
    public float getNota(){
        return nota;
    }

    public void setComentario(String comentario){
        this.comentario = comentario;
    }
    public String getComentario(){
        return comentario;
    }
    
    public void setrga(String rga){
        this.rga = rga;
    }
    public String getrga(){
        return rga;
    }

    public void setSemestre(String semestre){
        this.semestre = semestre;
    }
    public String getSemestre(){
        return semestre;
    }
}