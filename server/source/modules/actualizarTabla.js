module.exports={

    //CREAMOS LAS FUNCIONES RESTABLECER Y ACTUALIZAR YA QUE SE VAN A UTILIZAR EN DISTINTOS CONTROLADORES PARA NO TENER TANTO CODIGO
    restablecer:(local, visitante, partido)=>{

        local.g_favor = Number(local.g_favor)
        local.g_contratos = Number(local.g_contra)
        local.pts=Number(local.pts)
        local.p_ganados = Number(local.p_ganados)
        local.p_perdidos = Number(local.p_perdidos)
        local.p_empatados = Number(local.p_empatados)
        local.p_jugados = Number(local.p_jugados)
        
        visitante.g_favor = Number(visitante.g_favor)
        visitante.g_contratos = Number(visitante.g_contra)
        visitante.pts= Number(visitante.pts)
        visitante.p_ganados = Number(visitante.p_ganados)
        visitante.p_perdidos = Number(visitante.p_perdidos)
        visitante.p_empatados = Number(visitante.p_empatados)
        visitante.p_jugados = Number(visitante.p_jugados)

        if(partido.g_local != null && partido.g_visitante != null){
            local.p_jugados -= 1
            visitante.p_jugados -= 1

            partido.g_local = Number(partido.g_local)

            partido.g_visitante = Number(partido.g_visitante)
            //AHORA VAMOS A EDITARLES LAS DEMAS TABLAS EN CASO DE GANADOR LOCAL
            if(partido.g_local > partido.g_visitante ) {
                local.p_ganados -=1
                visitante.p_perdidos-=1

                local.g_favor -= partido.g_local
                local.g_contra -= partido.g_visitante
                

                visitante.g_favor -= partido.g_visitante
                visitante.g_contra -= partido.g_local
                
                
            //EN CASO QUE EL VISITANTE HAYA GANADO 
            } else if (partido.g_local < partido.g_visitante){
                local.p_perdidos -=1
                visitante.p_ganados-=1

                visitante.g_favor -= partido.g_visitante
                visitante.g_contra -= partido.g_local
            

                local.g_favor -= partido.g_local
                local.g_contra -= partido.g_visitante
                
            
            //EN CASO DE EMPATE
            } else if(partido.g_local == partido.g_visitante){
                local.p_empatados -=1
                visitante.p_empatados-=1

                visitante.g_favor -= partido.g_visitante
                visitante.g_contra -= partido.g_local
                

                local.g_favor -= partido.g_local
                local.g_contra -= partido.g_visitante
                
            }
            local.g_dif = local.g_favor - local.g_contra
            local.pts= local.p_ganados + local.p_ganados + local.p_ganados + local.p_empatados

            visitante.g_dif = visitante.g_favor - visitante.g_contra
            visitante.pts = visitante.p_ganados + visitante.p_ganados + visitante.p_ganados + visitante.p_empatados


        }

    },
    actualizar:(local, visitante, partido)=>{

        local.g_favor = Number(local.g_favor)
        local.g_contratos = Number(local.g_contra)
        local.pts=Number(local.pts)
        local.p_ganados = Number(local.p_ganados)
        local.p_perdidos = Number(local.p_perdidos)
        local.p_empatados = Number(local.p_empatados)
        local.p_jugados = Number(local.p_jugados)
        
        visitante.g_favor = Number(visitante.g_favor)
        visitante.g_contratos = Number(visitante.g_contra)
        visitante.pts= Number(visitante.pts)
        visitante.p_ganados = Number(visitante.p_ganados)
        visitante.p_perdidos = Number(visitante.p_perdidos)
        visitante.p_empatados = Number(visitante.p_empatados)
        visitante.p_jugados = Number(visitante.p_jugados)

        if(partido.g_local != null && partido.g_visitante != null){
            local.p_jugados += 1
            visitante.p_jugados += 1

            partido.g_local = Number(partido.g_local)

            partido.g_visitante = Number(partido.g_visitante)
            //AHORA VAMOS A EDITARLES LAS DEMAS TABLAS EN CASO DE GANADOR LOCAL
            if(partido.g_local > partido.g_visitante ) {
                local.p_ganados +=1
                visitante.p_perdidos +=1

                local.g_favor += partido.g_local
                local.g_contra += partido.g_visitante
                

                visitante.g_favor += partido.g_visitante
                visitante.g_contra += partido.g_local
                
                
            //EN CASO QUE EL VISITANTE HAYA GANADO 
            } else if (partido.g_local < partido.g_visitante){
                local.p_perdidos +=1
                visitante.p_ganados +=1

                visitante.g_favor += partido.g_visitante
                visitante.g_contra += partido.g_local
            

                local.g_favor += partido.g_local
                local.g_contra += partido.g_visitante
                
            
            //EN CASO DE EMPATE
            } else if(partido.g_local == partido.g_visitante){
                local.p_empatados +=1
                visitante.p_empatados+=1

                visitante.g_favor += partido.g_visitante
                visitante.g_contra += partido.g_local
                

                local.g_favor += partido.g_local
                local.g_contra += partido.g_visitante
                
            }
            local.g_dif = local.g_favor - local.g_contra
            local.pts= local.p_ganados + local.p_ganados + local.p_ganados + local.p_empatados

            visitante.g_dif = visitante.g_favor - visitante.g_contra
            visitante.pts = visitante.p_ganados + visitante.p_ganados + visitante.p_ganados + visitante.p_empatados


        }

    }
}