package com.feirasagroecologicas.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Feira {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String localizacao;
    private String descricao;
    private String diasFuncionamento;
}
