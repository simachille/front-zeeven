import React, { ReactNode } from 'react'
import ProtectedStack from '../../../components/layouts/protectedstack/Index'
import StepsWizard from '../../../components/steps/StepsWizard';

function CreerEvenement() {
  return (
     <StepsWizard />
  )
}

CreerEvenement.getLayout = function getLayout(page: ReactNode) {
  return (
		<ProtectedStack>
      {page}
		</ProtectedStack>
  )
}
export default CreerEvenement;