<template>
  <section class="hero-items mv-5">
    <h2 class="font-diablo">Items</h2>

    <hr class="bg-white">

    <!-- Grid de 3 columnas. Mostramos solo una centrada -->
    <v-row>
      <v-col cols="4" offset="4">
        <item-detail :item="itemsData.head"/>
      </v-col>
    </v-row>

    <hr>

    <!-- Grid de 3 columnas -->
    <v-row>
      <v-col>
        <item-detail :item="itemsData.shoulders"/>
      </v-col>
      <v-col>
        <item-detail :item="itemsData.torso"/>
      </v-col>
      <v-col>
        <item-detail :item="itemsData.neck"/>
      </v-col>
    </v-row>

    <hr>

    <!-- Grid de 3 columnas -->
    <v-row>
      <v-col>
        <item-detail :item="itemsData.hands"/>
      </v-col>
      <v-col>
        <item-detail :item="itemsData.waist"/>
      </v-col>
      <v-col>
        <item-detail :item="itemsData.bracers"/>
      </v-col>
    </v-row>

    <hr>

    <!-- Grid de 3 columnas -->
    <v-row>
      <v-col>
        <item-detail :item="itemsData.leftFinger"/>
      </v-col>
      <v-col>
        <item-detail :item="itemsData.legs"/>
      </v-col>
      <v-col>
        <item-detail :item="itemsData.rightFinger"/>
      </v-col>
    </v-row>

    <hr>

    <!-- Grid de 3 columnas -->
    <v-row>
      <v-col>
        <item-detail :item="itemsData.mainHand"/>
      </v-col>
      <v-col>
        <item-detail :item="itemsData.feet"/>
      </v-col>
      <v-col>
        <item-detail :item="itemsData.offHand"/>
      </v-col>
    </v-row>

  </section>

</template>

<script>
import ItemDetail from './ItemDetail'

// Objeto con las keys de los 'items' del personaje
const defaultItems = {
  head: {
    slotName: 'head'
  },
  shoulders: {
    slotName: 'Shoulders'
  },
  torso: {
    slotName: 'Torso'
  },
  neck: {
    slotName: 'Neck'
  },
  hands: {
    slotName: 'Hands'
  },
  waist: {
    slotName: 'Waist'
  },
  bracers: {
    slotName: 'Bracers'
  },
  leftFinger: {
    slotName: 'Left Finger'
  },
  legs: {
    slotName: 'Legs'
  },
  rightFinger: {
    slotName: 'Right Finger'
  },
  mainHand: {
    slotName: 'Main Hand'
  },
  feet: {
    slotName: 'Feet'
  },
  offHand: {
    slotName: 'Off Hand'
  }
}

export default {
  name: 'HeroItems',
  components: { ItemDetail },
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
    itemsData () {
      // Fusionar objetos:
      // Esto lo hacemos para mostrar el hueco vacío en caso de que ese objeto no esté equipado
      // Si NO hay item equipado, manda el valor de 'defaultItems' correspondiente
      // Si hay item equipado, manda la info del item
      return {
        ...defaultItems,
        ...this.items
      }
    }
  }
}
</script>
