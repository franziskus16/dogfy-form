
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'FormRenderer': typeof import("../components/FormRenderer.vue")['default']
    'MyWelcome': typeof import("../components/MyWelcome.vue")['default']
    'BaseButton': typeof import("../components/base/BaseButton.vue")['default']
    'BaseInput': typeof import("../components/base/BaseInput.vue")['default']
    'BaseSelect': typeof import("../components/base/BaseSelect.vue")['default']
    'CommonHeader': typeof import("../components/common/Header.vue")['default']
    'CommonProgressBar': typeof import("../components/common/ProgressBar.vue")['default']
    'FormStepsActivityLevelStep': typeof import("../components/formSteps/ActivityLevelStep.vue")['default']
    'FormStepsBreedStep': typeof import("../components/formSteps/BreedStep.vue")['default']
    'FormStepsDietGoalStep': typeof import("../components/formSteps/DietGoalStep.vue")['default']
    'FormStepsFoodPreferencesStep': typeof import("../components/formSteps/FoodPreferencesStep.vue")['default']
    'FormStepsPetAgeStep': typeof import("../components/formSteps/PetAgeStep.vue")['default']
    'FormStepsPetNameStep': typeof import("../components/formSteps/PetNameStep.vue")['default']
    'FormStepsPetWeightStep': typeof import("../components/formSteps/PetWeightStep.vue")['default']
    'FormStepsSummaryStep': typeof import("../components/formSteps/SummaryStep.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyFormRenderer': LazyComponent<typeof import("../components/FormRenderer.vue")['default']>
    'LazyMyWelcome': LazyComponent<typeof import("../components/MyWelcome.vue")['default']>
    'LazyBaseButton': LazyComponent<typeof import("../components/base/BaseButton.vue")['default']>
    'LazyBaseInput': LazyComponent<typeof import("../components/base/BaseInput.vue")['default']>
    'LazyBaseSelect': LazyComponent<typeof import("../components/base/BaseSelect.vue")['default']>
    'LazyCommonHeader': LazyComponent<typeof import("../components/common/Header.vue")['default']>
    'LazyCommonProgressBar': LazyComponent<typeof import("../components/common/ProgressBar.vue")['default']>
    'LazyFormStepsActivityLevelStep': LazyComponent<typeof import("../components/formSteps/ActivityLevelStep.vue")['default']>
    'LazyFormStepsBreedStep': LazyComponent<typeof import("../components/formSteps/BreedStep.vue")['default']>
    'LazyFormStepsDietGoalStep': LazyComponent<typeof import("../components/formSteps/DietGoalStep.vue")['default']>
    'LazyFormStepsFoodPreferencesStep': LazyComponent<typeof import("../components/formSteps/FoodPreferencesStep.vue")['default']>
    'LazyFormStepsPetAgeStep': LazyComponent<typeof import("../components/formSteps/PetAgeStep.vue")['default']>
    'LazyFormStepsPetNameStep': LazyComponent<typeof import("../components/formSteps/PetNameStep.vue")['default']>
    'LazyFormStepsPetWeightStep': LazyComponent<typeof import("../components/formSteps/PetWeightStep.vue")['default']>
    'LazyFormStepsSummaryStep': LazyComponent<typeof import("../components/formSteps/SummaryStep.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const FormRenderer: typeof import("../components/FormRenderer.vue")['default']
export const MyWelcome: typeof import("../components/MyWelcome.vue")['default']
export const BaseButton: typeof import("../components/base/BaseButton.vue")['default']
export const BaseInput: typeof import("../components/base/BaseInput.vue")['default']
export const BaseSelect: typeof import("../components/base/BaseSelect.vue")['default']
export const CommonHeader: typeof import("../components/common/Header.vue")['default']
export const CommonProgressBar: typeof import("../components/common/ProgressBar.vue")['default']
export const FormStepsActivityLevelStep: typeof import("../components/formSteps/ActivityLevelStep.vue")['default']
export const FormStepsBreedStep: typeof import("../components/formSteps/BreedStep.vue")['default']
export const FormStepsDietGoalStep: typeof import("../components/formSteps/DietGoalStep.vue")['default']
export const FormStepsFoodPreferencesStep: typeof import("../components/formSteps/FoodPreferencesStep.vue")['default']
export const FormStepsPetAgeStep: typeof import("../components/formSteps/PetAgeStep.vue")['default']
export const FormStepsPetNameStep: typeof import("../components/formSteps/PetNameStep.vue")['default']
export const FormStepsPetWeightStep: typeof import("../components/formSteps/PetWeightStep.vue")['default']
export const FormStepsSummaryStep: typeof import("../components/formSteps/SummaryStep.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyFormRenderer: LazyComponent<typeof import("../components/FormRenderer.vue")['default']>
export const LazyMyWelcome: LazyComponent<typeof import("../components/MyWelcome.vue")['default']>
export const LazyBaseButton: LazyComponent<typeof import("../components/base/BaseButton.vue")['default']>
export const LazyBaseInput: LazyComponent<typeof import("../components/base/BaseInput.vue")['default']>
export const LazyBaseSelect: LazyComponent<typeof import("../components/base/BaseSelect.vue")['default']>
export const LazyCommonHeader: LazyComponent<typeof import("../components/common/Header.vue")['default']>
export const LazyCommonProgressBar: LazyComponent<typeof import("../components/common/ProgressBar.vue")['default']>
export const LazyFormStepsActivityLevelStep: LazyComponent<typeof import("../components/formSteps/ActivityLevelStep.vue")['default']>
export const LazyFormStepsBreedStep: LazyComponent<typeof import("../components/formSteps/BreedStep.vue")['default']>
export const LazyFormStepsDietGoalStep: LazyComponent<typeof import("../components/formSteps/DietGoalStep.vue")['default']>
export const LazyFormStepsFoodPreferencesStep: LazyComponent<typeof import("../components/formSteps/FoodPreferencesStep.vue")['default']>
export const LazyFormStepsPetAgeStep: LazyComponent<typeof import("../components/formSteps/PetAgeStep.vue")['default']>
export const LazyFormStepsPetNameStep: LazyComponent<typeof import("../components/formSteps/PetNameStep.vue")['default']>
export const LazyFormStepsPetWeightStep: LazyComponent<typeof import("../components/formSteps/PetWeightStep.vue")['default']>
export const LazyFormStepsSummaryStep: LazyComponent<typeof import("../components/formSteps/SummaryStep.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
