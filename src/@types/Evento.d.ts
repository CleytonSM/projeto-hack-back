import { AcessibilidadeXEventoProps } from "./AcessibilidadeXEvento";
import { EnderecosProps } from "./Enderecos";
import { SustentabilidadeXEventoProps } from "./SustentabilidadeXEvento";

export interface EventosProps {
    nome: string,
    descricao: string,
    como_participar: string,
    data: Date,
    hora_inicio: string,
    hora_fim: string,
    imagem: string,
    ingresso_social: string,
    id_instituicao: string,
}

export interface EventosReturnProps {
    id: string,
    nome: string,
    descricao: string,
    como_participar: string,
    data: Date,
    hora_inicio: string,
    hora_fim: string,
    imagem: string,
    ingresso_social: string,
    id_instituicao: string,
    sustentabilidadeXevento: SustentabilidadeXEventoProps[],
    acessibilidadeXevento: AcessibilidadeXEventoProps[],
    Endereco: EnderecosProps[],
}