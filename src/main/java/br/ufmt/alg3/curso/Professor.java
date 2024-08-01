package br.ufmt.alg3.curso;

public class Professor {
    private String nome;
    private String atuacao;
    private String disciplina;
    private String semestre;
    private String departamento;
    private String comentario;
    private float nota;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setAtuacao(String atuacao) {
        this.atuacao = atuacao;
    }

    public String getAtuacao() {
        return atuacao;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setSemestre(String semestre) {
        this.semestre = semestre;
    }

    public String getSemestre() {
        return semestre;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public String getComentario() {
        return comentario;
    }

    public void setNota(float nota) {
        this.nota = nota;
    }

    public float getNota() {
        return nota;
    }
}
