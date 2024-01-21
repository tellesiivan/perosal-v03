import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  ExperienceKey,
  experienceTextMap,
  HomeKey,
  homeTextMap,
  sharedTextMap,
} from '@/lib/ui-text-map'
import { Result } from 'postcss'
import { ResumeContainer } from '@/components/resume-container'
import { Tool, ToolsSection } from '@/components/tools'

export const metadata = {
  title: experienceTextMap.get('heading'),
  description: experienceTextMap.get('description'),
}

export default function Uses() {
  return (
    <SimpleLayout
      title={experienceTextMap.get('heading')}
      intro={experienceTextMap.get('description')}
    >
      <div className="space-y-20">
        <ToolsSection
          title={experienceTextMap.get('job1Title')}
          subTitle={experienceTextMap.get('job1Date')}
        >
          {[1, 2, 3, 4, 5].map((descNum) => (
            <Tool
              key={descNum}
              title={experienceTextMap.get(
                `job1Desc${descNum}` as ExperienceKey,
              )}
            />
          ))}
        </ToolsSection>
        <ToolsSection
          title={experienceTextMap.get('job2Title')}
          subTitle={experienceTextMap.get('job2Date')}
        >
          {[1, 2, 3].map((descNum) => (
            <Tool
              key={descNum}
              title={experienceTextMap.get(
                `job2Desc${descNum}` as ExperienceKey,
              )}
            />
          ))}
        </ToolsSection>
      </div>
      <ResumeContainer />
    </SimpleLayout>
  )
}
