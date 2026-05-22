import { NextResponse } from 'next/server'
import connectDb from '@/lib/db'
import CompanySettings from '@/models/CompanySettings'

export async function GET() {
  try {
    await connectDb()

    const settings = await CompanySettings.findOne({}).lean()

    if (!settings) {
      return NextResponse.json({
        success: true,
        data: {
          logoUrl: null,
          companyName: 'Visa4',
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        logoUrl: settings.logoUrl || null,
        companyName: settings.companyName || 'Visa4',
      },
    })
  } catch (error) {
    console.error('Error fetching company logo:', error)
    return NextResponse.json(
      {
        success: true,
        data: {
          logoUrl: null,
          companyName: 'Visa4',
        },
      },
      { status: 200 } // Return default even on error
    )
  }
}

