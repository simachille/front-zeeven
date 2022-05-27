import React from 'react'
import ProtectedStack from '../../../layouts/protectedstack/Index'
import StepsWizard from '../../../components/steps/StepsWizard';

function CreerEvenement() {

  return (
    <ProtectedStack>
     <StepsWizard />
    </ProtectedStack>
  )
}

export default CreerEvenement